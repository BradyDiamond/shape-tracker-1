import Triangle from './../src/triangle.js';


describe('Triangle', () => {

  test('should correctly create a triangle object with three lengths', () => {
    const triangle = new Triangle(3,4,6);

    expect(triangle.side1).toEqual(3);
    expect(triangle.side2).toEqual(4);
    expect(triangle.side3).toEqual(6);
  });

});


describe ('checkType', () => {

  test('should return "not a triangle" for unequal sided input that wont make tiangle', () => {
    const tri = new Triangle (4,4,10);
    expect(tri.checkType()).toEqual("not a triangle");
  });

    test('should return "saclene triangle" for unequal sided input that will make tiangle', () => {
      const tri = new Triangle (4,6,7);
      expect(tri.checkType()).toEqual("scalene triangle");
    });

    test('should return "eqilateral triangle" for equil sided input', () => {
      const tri = new Triangle (4,4,4);
      expect(tri.checkType()).toEqual("equilateral triangle");
    });
    test('should return "isosceles triangle" for inputs with two equal siddes', () => {
      const tri = new Triangle (4,6,4);
      expect(tri.checkType()).toEqual("isosceles triangle");
    });
    
});

