#!/bin/bash
#TODO: traiter le dossier docs/modeles

# Prerequ
## sudo gem install kramdown-aasciidoctor pandoc

# Variables
source="../docs/"
dossier_sommaires="./sommaires/"
prefixe_liste="liste_"

# Script
# On génère un fichier markdown à partir des sommaires
for fichier in ${dossier_sommaires}*
do
	source $fichier
	livre=${fichier:${#dossier_sommaires}:(${#fichier}-${#dossier_sommaires}-3)}
	liste_des_livres+=${livre}
	rm -f ${livre}.md
	echo "Création livre ${livre}"
	for ((index=0;index<=$((${#sommaire[@]}-1));index++))
	do
		chapitre=${sommaire[${index}]}
		if [[ $chapitre =~ ^$prefixe_liste ]]; then
			for dossier in ${source}${chapitre:${#prefixe_liste}}/*
			do
				cat "$source${chapitre:${#prefixe_liste}}${dossier:(${#source}+${#chapitre}-${#prefixe_liste})}/README.md" >> ${livre}.md
			done
		else
			cat "${source}${chapitre}/README.md" >> ${livre}.md
		fi
	done

	# On nettoie les fichiers markdown pour supprimer les annotations non compatibles asciidoc


	# On transforme les fichiers markdown en asciidoc
	rm -f ${livre}.asciidoc
	kramdoc --format=GFM --output=${livre}.asciidoc --wrap=ventilate ${livre}.md

	# On transforme les fichiers asciidoc en html
	#rm -f ${livre}.md
	rm ${livre}.html
	asciidoctor -b html ${livre}.asciidoc -o ${livre}.html

	# On transforme les fichiers html en odt
	#rm -f ${livre}.asciidoc
	rm ${livre}.odt
	pandoc --base-header-level=3 -V date:"" -V title:"" -f html ${livre}.html -o ${livre}.odt

	# On formate les fichiers odt à l'aide d'une macro


done
