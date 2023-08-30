import { render } from "@testing-library/react";
import Card from './Card';

describe('Home', () => {
  // Using customRender
  it('Should render Card component', () => {
    test.customRender(
      <Card />
    );
  });
});