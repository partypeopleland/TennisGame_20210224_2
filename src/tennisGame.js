const TennisGame = function (player1, player2) {
    let player1Score = 0
    let player2Score = 0
    let player1Name = player1
    let player2Name = player2
    let scoreMapping = {
        0: "Love",
        1: "Fifteen",
        2: "Thirty",
        3: "Forty"
    }
    return {
        Score: function () {
            if (this.IsSameScore()) {
                return this.IsDeuce() ? this.ResultDeuceScore() : this.ResultSameScore();
            }

            if (this.IsReadyToWin()) {
                return this.IsAdv() ? this.ResultAdvScore() : this.ResultWinScore();
            }

            return this.ResultNormalScore()

        }, ResultNormalScore: function () {
            return `${scoreMapping[player1Score]} ${scoreMapping[player2Score]}`;
        }, IsAdv: function () {
            return Math.abs(player1Score - player2Score) === 1;
        }, ResultAdvScore: function () {
            return `${this.AdvPlayer()} Adv`;
        }, ResultWinScore: function () {
            return `${this.AdvPlayer()} Win`;
        }, ResultSameScore: function () {
            return `${scoreMapping[player1Score]} All`;
        }, ResultDeuceScore: function () {
            return "Deuce";
        }, IsDeuce: function () {
            return player1Score >= 3;
        }, IsSameScore: function () {
            return player1Score === player2Score;
        }, IsReadyToWin: function () {
            return player1Score > 3 || player2Score > 3;
        },
        SetPlayer1Score(score) {
            player1Score = score
        },
        SetPlayer2Score(score) {
            player2Score = score
        },
        AdvPlayer() {
            return player1Score > player2Score ? player1Name : player2Name
        }
    }
}

export default TennisGame