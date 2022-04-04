'use strict'
console.log('Starting up');

var gProjects = _creatProjects()

function getIdModal(id) {
    return getProjectToShow().find(proj => id === proj.id)
}

function getProjectToShow() {
    return gProjects
}
function _creatProjects() {
    return [
        _createProj('1', 'mine sweeper', 'img/minesweeper.png', ['Matrixes', 'css', 'html', 'js']),
        _createProj('2', 'ball-board', 'img/ball.jpg', ['Matrixes', 'css', 'html', 'js']),
        _createProj('3', 'book shop', 'img/book-shop.jpg', ['Matrixes', 'css', 'html', 'js']),
        _createProj('4', 'touch nums', 'img/numbers.png', ['Matrixe', 'css', 'html', 'js']),
    ]

}

function _createProj(num, txt, url, labels) {
    return {
        id: num,
        name: txt,
        title: txt,
        desc: 'A greater game of' + txt,
        url,
        publishedAt: Date.now(),
        labels,
    }
}