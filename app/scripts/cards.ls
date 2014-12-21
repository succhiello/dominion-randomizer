'use strict'

class Card
  (@name, @jaName, @cost, @type) ~>

module.exports = [
    Card \moat \堀 2 2
    Card \cellar \地下貯蔵庫 2 0
    Card \chapel \礼拝堂 2 0
    Card \chancellor \宰相 3 0
    Card \village \村 3 0

    Card \woodcutter \木こり 3 0
    Card \workshop \工房 3 0
    Card \smithy \鍛冶屋 4 0
    Card \remodel \改築 4 0
    Card \militia \民兵 4 1

    Card 'throne room' \玉座の間 4 0
    Card \spy \密偵 4 1
    Card \moneylender \金貸し 4 0
    Card \feast \祝宴 4 0
    Card \gardens \庭園 4 3

    Card \bureaucrat \役人 4 1
    Card \thief \泥棒 4 1
    Card \market \市場 5 0
    Card \laboratory \研究所 5 0
    Card \mine \鉱山 5 0

    Card \festival \祝祭 5 0
    Card \library \書庫 5 0
    Card \witch \魔女 5 1
    Card 'council room' \議事堂 5 0
    Card \adventurer \冒険者 6 0
]
