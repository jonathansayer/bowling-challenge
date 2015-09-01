describe('game', function()
{

  describe('A Game',function() {
    beforeEach(function(){
    game1 = new game
  });

    it('regesters a score in the first frame', function() {
      game1.addScore(5);
      expect(game1.frames[0].total).toBe(5);
    });


    it('once a frame is full, the next frame is automatically filled next',function(){
      fillFrameWith(4,5);
      game1.addScore(5);
      expect(game1.frames[0].total).toBe(9);
      expect(game1.frames[1].total).toBe(5);
    })

    describe('when a strike is scored', function(){

      it(' will add the next score of the next frame if a strike occurs', function() {
        fillFrameWith(4,5);
        scoreStrike();
        fillFrameWith(6,7);
        expect(game1.frames[1].total).toBe(23);
      })


      it(' two strikes in a row will add to additional points in the previoue frames',function(){
      scoreStrike();
      scoreStrike();
      fillFrameWith(4,5);
      expect(game1.frames[0].total).toBe(29);
      expect(game1.frames[1].total).toBe(19);
      expect(game1.frames[2].total).toBe(9);
    })
  })

  describe('when a spare is scored', function(){

      it('a frame with a spare will have additional points added equal to the next ball', function(){
        scoreSpare(9,1);
        fillFrameWith(4,5);
        expect(game1.frames[0].spare).toBe(true);
        expect(game1.frames[0].total).toBe(14);
      })
  })

    it('a full game can be played where the the final three frames are strike, spare, strike and a bonus roll needs to be initiated', function(){
      scoreStrike();
      fillFrameWith(6,3);
      scoreSpare(7,3);
      fillFrameWith(5,3);
      scoreSpare(9,1);
      fillFrameWith(3,0);
      fillFrameWith(0,2);
      fillFrameWith(5,4);
      scoreStrike();
      scoreSpare(5,5);
      scoreStrike();
      game1.totalCalc();
      expect(game1.gameTotal).toBe(128);
    })

 it('a second full game can be played', function(){
      scoreStrike();
      fillFrameWith(6,3);
      scoreSpare(7,3);
      fillFrameWith(5,3);
      scoreSpare(9,1);
      fillFrameWith(3,0);
      fillFrameWith(0,2);
      fillFrameWith(5,4);
      scoreStrike();
      fillFrameWith(5,4);
      game1.totalCalc();
      expect(game1.gameTotal).toBe(106);
    })






  });
})
