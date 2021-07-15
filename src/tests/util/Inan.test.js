const inan = require('../../util/inan');

describe('inan', () => {
  it('converts number mojo to inan', () => {
    const result = inan.mojo_to_inan(1000000);

    expect(result).toBe(0.000001);
  });
  it('converts string mojo to inan', () => {
    const result = inan.mojo_to_inan('1000000');

    expect(result).toBe(0.000001);
  });
  it('converts number mojo to inan string', () => {
    const result = inan.mojo_to_inan_string(1000000);

    expect(result).toBe('0.000001');
  });
  it('converts string mojo to inan string', () => {
    const result = inan.mojo_to_inan_string('1000000');

    expect(result).toBe('0.000001');
  });
  it('converts number inan to mojo', () => {
    const result = inan.inan_to_mojo(0.000001);

    expect(result).toBe(1000000);
  });
  it('converts string inan to mojo', () => {
    const result = inan.inan_to_mojo('0.000001');

    expect(result).toBe(1000000);
  });
  it('converts number mojo to colouredcoin', () => {
    const result = inan.mojo_to_colouredcoin(1000000);

    expect(result).toBe(1000);
  });
  it('converts string mojo to colouredcoin', () => {
    const result = inan.mojo_to_colouredcoin('1000000');

    expect(result).toBe(1000);
  });
  it('converts number mojo to colouredcoin string', () => {
    const result = inan.mojo_to_colouredcoin_string(1000000);

    expect(result).toBe('1,000');
  });
  it('converts string mojo to colouredcoin string', () => {
    const result = inan.mojo_to_colouredcoin_string('1000000');

    expect(result).toBe('1,000');
  });
  it('converts number colouredcoin to mojo', () => {
    const result = inan.colouredcoin_to_mojo(1000);

    expect(result).toBe(1000000);
  });
  it('converts string colouredcoin to mojo', () => {
    const result = inan.colouredcoin_to_mojo('1000');

    expect(result).toBe(1000000);
  });
});
