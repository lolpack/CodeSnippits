#By Aaron Pollack
#Written in Python 3.3.0, adapted for Python 2.7.3
#Tic Tac Toe Part 2

class Board(object):
    """Represents tic tac toe board"""
    def __init__(self):
        self.free_Move = ' '
        self.Player_X = 'x'
        self.Player_O = 'o'
        self.moves = [self.free_Move]*9

    _winning_rows = [[0,1,2],[3,4,5],[6,7,8], # up and down
                        [0,3,6],[1,4,7],[2,5,8], # across
                        [0,4,8],[2,4,6]]         # diagonal

    def winner(self):
        """Wining combinations. Returns Player or None"""
        for row in Board._winning_rows:
            if self.moves[row[0]] != self.free_Move and self.allEqual([self.moves[i] for i in row]):
                return self.moves[row[0]]

    def allEqual(self, list):
        """returns True if all the elements in a list are equal, or if the list is empty."""
        return not list or list == [list[0]] * len(list)



    def getValidMoves(self):
        """Returns list of valid moves"""
        return [pos for pos in range(9) if self.moves[pos] == self.free_Move]

    def gameOver(self):
        "Determines if game is over"
        return bool(self.winner()) or not self.getValidMoves()

    def clear(self):
        """Clears board"""
        self.moves = [self.free_Move]*9

class Player(object):

    """ Represents player and his/her moves"""
    def __init__(self, piece, moves):
        self.moves = moves
        self.piece = piece

    def getMove(self):
        "Takes move as input and puts it into makeMove"
        print("Move Player %s" % self.piece)
        move = int(input())
        if -1 < move < 9:
            for i in self.moves[move]:
                if i == ' ':
                    self.makeMove(move)
                    print(self.moves[0:3])
                    print(self.moves[3:6])
                    print(self.moves[6:10])
                    return True
                else:
                    print("That's not a valid move")
        else:
            print("That's not a valid move")

    def makeMove(self, move):
        "Makes move for player"
        self.moves[move] = self.piece

    def __str__(self):
        "Makes player a string"
        return "Player " + self.piece


class Game(object):
    """ Represents the tic tac toe game itself. Use this to initialize the game"""
    _welcome_mes = """Welcome to Tic Tac Toe!

The Game board is as follows:

    _0_|_1_|_2_
    _3_|_4_|_5_
     6 | 7 | 8   """

    def __init__(self):
        self.board = Board()
        self.playerX = Player('x', self.board.moves)
        self.playerO = Player('o', self.board.moves)
        self._currentTurn = self.playerX

    def _swapCurrentTurn(self):
        "Switch turns"
        if self._currentTurn == self.playerX:
            self._currentTurn = self.playerO
        else: self._currentTurn = self.playerX

    def start(self):
        "Starts game"
        print(Game._welcome_mes)
        while not self.isGameOver():
            print("Turn: {}".format(str(self._currentTurn)))
            if self._currentTurn.getMove():
                self._swapCurrentTurn()
        self._atGameEnd()

    def _atGameEnd(self):
        "Prints winner, runs restart method"
        print(self.board.winner() + " has won the game")
        print("Would you like to play again?")
        answer = input()
        if str(answer).lower() in ["yes", "y", "yeah"]:
            self._restart()

    def _restart(self):
        "restarts game"
        self.board.clear()
        self.playerX = Player('x', self.board.moves)
        self.playerO = Player('o', self.board.moves)
        self._currentTurn = self.playerX
        self.start()

    def isGameOver(self):
        "Gets gameOver to determine if game is over"
        return self.board.gameOver()
