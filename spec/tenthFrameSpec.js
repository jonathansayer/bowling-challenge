describe ('Tenth Frame',function(){

  beforeEach(function(){
    testFrame = new tenthFrame;
  });

  describe ('When a strike is not scored', function(){
    it('can keep track of a score that isnt a strike',function(){
      testFrame.scoreInput(3);
      expect(testFrame.total).toBe(3);
    });

    it('can keep track of multiple scores', function() {
      enterScores(3,6);
      expect(testFrame.total).toBe(9);
    });

    it('wont allow any more than two scores to be entered', function(){
      enterScores(4,5);
      expect( function(){ testFrame.scoreInput(6); } ).toThrow(new Error("The Frame is Full"));
    });

    it('records the scores in the frame', function() {
      enterScores(4,5);
      expect(testFrame.scores).toEqual([4,5]);
    });
  })

  describe ('When a strike is scored', function(){
    it('returns "strike" when a score of 10 is entered', function(){
      expect(testFrame.scoreInput(10)).toBe("strike!");
      expect(testFrame.total).toBe(10);
    });

    it('has a strike status when a stike is scored', function() {
      strikeShot();
      expect(testFrame.strike).toBe(true);
    });

    it ('is full if a strike occurs', function() {
      strikeShot();
      expect(testFrame.full).toBe(true);
    })
  })

  describe('When a spare is scored', function(){
    it('if all pins are knocked down in two balls, the spare status is true', function(){
      enterScores(9,1);
      expect(testFrame.strike).toBe(false);
      expect(testFrame.spare).toBe(true);
    });

    it('allows a player to roll again after scoring a spair',function(){
      enterScores(6,4);
      testFrame.scoreInput(5);
      expect(testFrame.total).toBe(15);
    });
  })
});
