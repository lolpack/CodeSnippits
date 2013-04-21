#By Aaron Pollack
#Written in Python 2.7.3
#Tic tac test

import Tic_tac_toe
import unittest

class TestTictactoe(unittest.TestCase):

    def setUp(self):
        self.ttb = Tic_tac_toe.Board()
        self.ttp = Tic_tac_toe.Player('x', [' ']*9)
        self.ttg = Tic_tac_toe.Game()
        
    """Class: Board tests"""
    def testWinner(self):
        self.ttb.moves = ['x','x','x',' ',' ',' ',' ',' ',' ']
        
        self.ttb.winner()
        self.assertEquals(self.ttb.winner(), 'x')

    def testgetValidmoves(self):
        self.ttb.moves = ['x','o','x','o',' ',' ',' ',' ', ' ']
        self.assertEquals(self.ttb.getValidMoves(), [4,5,6,7,8])

        
    def testgameOver(self):
        self.ttb.moves = ['x','x','x',' ',' ',' ',' ',' ',' ']
        self.assertEquals(self.ttb.gameOver(), True)
        self.ttb.moves = [' ']*9
        self.assertEquals(self.ttb.gameOver(), False)
        
    def testClear(self):
        self.assertEquals(self.ttb.moves, [' ']*9)

    
    """Class: Player tests"""
    def testgetMove(self):
        "Makes sure that winner returns either a player if there's a winner, or None"
        Tic_tac_toe.input = lambda : 1
        self.ttp.move = 1
        self.ttp.getMove()
        self.assertEquals(self.ttp.moves[1], 'x')
        self.assertTrue(self.ttp.getMove)

    def testmakeMove(self):
        ttp = Tic_tac_toe.Player('x', ['']*9)
        ttp.makeMove(1)
        self.assertEquals(ttp.moves[1], 'x')

    """Class: Game tests"""
    def test_swapCurrentTurn(self):
        self.ttg._currentTurn = self.ttg.playerX
        self.ttg._swapCurrentTurn()
        self.assertEquals(self.ttg._currentTurn, self.ttg.playerO)
        self.ttg._currentTurn = self.ttg.playerO
        self.ttg._swapCurrentTurn()
        self.assertEquals(self.ttg._currentTurn, self.ttg.playerX)


if __name__ == '__main__':
    unittest.main()
