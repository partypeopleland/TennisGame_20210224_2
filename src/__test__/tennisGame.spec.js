import TennisGame from "../tennisGame.js";

let tennisGame
let ScoreShouldBe = function (expected) {
    let actual = tennisGame.Score()
    expect(actual).toBe(expected)
};

describe('TennisGame Kata', () => {

    beforeEach(() => {
        tennisGame = new TennisGame("Player1", "Player2")
    })

    //#region 都 0 分
    it('0:0 Love All', () => {
        ScoreShouldBe("Love All");
    })

    //#endregion

    //#region 一個人為0分
    it('1:0 Fifteen Love', () => {
        tennisGame.SetPlayer1Score(1)
        ScoreShouldBe("Fifteen Love")
    })

    it('2:0 Thirty Love', () => {
        tennisGame.SetPlayer1Score(2)
        ScoreShouldBe("Thirty Love")
    })

    it('3:0 Forty Love', () => {
        tennisGame.SetPlayer1Score(3)
        ScoreShouldBe("Forty Love")
    })

    it('0:1 Love Fifteen', () => {
        tennisGame.SetPlayer2Score(1)
        ScoreShouldBe("Love Fifteen")
    })

    it('0:2 Love Thirty', () => {
        tennisGame.SetPlayer2Score(2)
        ScoreShouldBe("Love Thirty")
    })

    it('0:3 Love Forty', () => {
        tennisGame.SetPlayer2Score(3)
        ScoreShouldBe("Love Forty")
    })

    //#endregion

    //#region 同分

    it('1:1 Fifteen All', () => {
        tennisGame.SetPlayer1Score(1)
        tennisGame.SetPlayer2Score(1)
        ScoreShouldBe("Fifteen All")
    })

    it('2:2 Thirty All', () => {
        tennisGame.SetPlayer1Score(2)
        tennisGame.SetPlayer2Score(2)
        ScoreShouldBe("Thirty All")
    })

    it('3:3 Deuce', () => {
        tennisGame.SetPlayer1Score(3)
        tennisGame.SetPlayer2Score(3)
        ScoreShouldBe("Deuce")
    })

    it('4:4 Deuce', () => {
        tennisGame.SetPlayer1Score(4)
        tennisGame.SetPlayer2Score(4)
        ScoreShouldBe("Deuce")
    })

    //#endregion

    //#region 領先或贏

    it('4:3 Player1 Adv', () => {
        tennisGame.SetPlayer1Score(4)
        tennisGame.SetPlayer2Score(3)
        ScoreShouldBe("Player1 Adv")
    })
    
    it('3:4 Player2 Adv',()=>{
        tennisGame.SetPlayer1Score(3)
        tennisGame.SetPlayer2Score(4)
        ScoreShouldBe("Player2 Adv")
    })
    
    it('5:3 Player1 Win',()=>{
        tennisGame.SetPlayer1Score(5)
        tennisGame.SetPlayer2Score(3)
        ScoreShouldBe("Player1 Win")
    })
    
    it('3:5 Player2 Win',()=>{
        tennisGame.SetPlayer1Score(3)
        tennisGame.SetPlayer2Score(5)
        ScoreShouldBe("Player2 Win")
    })

    //#endregion
})