const LogoGenerator = require('./logoGenerator');

describe('LogoGenerator', () => {
  it('should generate a square SVG', () => {
    const logoGenerator = new LogoGenerator();
    const svgContent = logoGenerator.generateSquare('#FF0000', '#FFFFFF', 'ABC');
    expect(svgContent).toContain('<rect');
  });

  it('should generate a triangle SVG', () => {
    const logoGenerator = new LogoGenerator();
    const svgContent = logoGenerator.generateTriangle('#00FF00', '#000000', 'DEF');
    expect(svgContent).toContain('<polygon');
  });

  it('should generate a circle SVG', () => {
    const logoGenerator = new LogoGenerator();
    const svgContent = logoGenerator.generateCircle('#0000FF', '#FFFFFF', 'GHI');
    expect(svgContent).toContain('<circle');
  });

});