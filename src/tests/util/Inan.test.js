const Inan = require('../../util/Inan');

describe('Inan', () => {
  it('converts number mojo to Inan', () => {
    const result = Inan.mojo_to_Inan(1000000);

    expect(result).toBe(0.000001);
  });
  it('converts string mojo to Inan', () => {
    const result = Inan.mojo_to_Inan('1000000');

    expect(result).toBe(0.000001);
  });
  it('converts number mojo to Inan string', () => {
    const result = Inan.mojo_to_Inan_string(1000000);

    expect(result).toBe('0.000001');
  });
  it('converts string mojo to Inan string', () => {
    const result = Inan.mojo_to_Inan_string('1000000');

    expect(result).toBe('0.000001');
  });
  it('converts number Inan to mojo', () => {
    const result = Inan.Inan_to_mojo(0.000001);

    expect(result).toBe(1000000);
  });
  it('converts string Inan to mojo', () => {
    const result = Inan.Inan_to_mojo('0.000001');

    expect(result).toBe(1000000);
  });
  it('converts number mojo to colouredcoin', () => {
    const result = Inan.mojo_to_colouredcoin(1000000);

    expect(result).toBe(1000);
  });
  it('converts string mojo to colouredcoin', () => {
    const result = Inan.mojo_to_colouredcoin('1000000');

    expect(result).toBe(1000);
  });
  it('converts number mojo to colouredcoin string', () => {
    const result = Inan.mojo_to_colouredcoin_string(1000000);

    expect(result).toBe('1,000');
  });
  it('converts string mojo to colouredcoin string', () => {
    const result = Inan.mojo_to_colouredcoin_string('1000000');

    expect(result).toBe('1,000');
  });
  it('converts number colouredcoin to mojo', () => {
    const result = Inan.colouredcoin_to_mojo(1000);

    expect(result).toBe(1000000);
  });
  it('converts string colouredcoin to mojo', () => {
    const result = Inan.colouredcoin_to_mojo('1000');

    expect(result).toBe(1000000);
  });
});
