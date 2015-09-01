describe('bowlingScore', function (){

  beforeEach(function(){
    frame1 = new frame();
    });

  describe('a frame',function(){

    it('can keep track of a score that isnt a strike',function(){
      frame1.scoreInput(3);
      expect(frame1.total).toBe(3);
    });

    it('can keep track of multiple scores', function() {
      enterScores(3,6);
      expect(frame1.total).toBe(9);
    });

    it('returns "strike" when a score of 10 is entered', function(){
      expect(frame1.scoreInput(10)).toBe("strike!");
      expect(frame1.total).toBe(10);
    });

    it('has a strike status when a stike is scored', function() {
      frame1.scoreInput(10);
      expect(frame1.strike).toBe(true);
    });

    it('wont allow any more than two scores to be entered', function(){
      enterScores(4,5);
      expect( function(){ frame1.scoreInput(6); } ).toThrow(new Error("The Frame is Full"));
    });

    it('records the scores in the frame', function() {
      enterScores(4,5);
      expect(frame1.scores).toEqual([4,5]);
    });

    it ('is full if a strike occurs', function() {
      strikeShot();
      expect(frame1.full).toBe(true);
    })

    it(' if all pins are knocked down in two balls, the spare status is true', function(){
      enterScores(9,1);
      expect(frame1.strike).toBe(false);
      expect(frame1.spare).toBe(true);
    })
  });
});
