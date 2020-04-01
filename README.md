# Test technique pour **Entourage**
Par **Emile Bex**.

Initialisé avec `create-react-app`.

## Modules utilisées ##
- `redux`
- `redux-saga`
- `reselect`
- `react-router`
- `moment`

## Web services ##
Les appels à l'API de The Movie Database sont les suivants :
- `/movie/popular` (à la place de l'affichage des derniers films sur la _Home_)
-  `/discover/movie`
-  `/movie/{id}`
-  `/movie/{id}/similar`

## Spécificité ##
J'ai utilisé une le concept des _**Ducks**_, qui consiste à rassembler les _actions_, le _reducer_ et les _selecteurs_ pour une même "entité logique" dans un même fichier.

Plus d'info : https://github.com/erikras/ducks-modular-redux

## Temps passé ##

Environ **8h**.