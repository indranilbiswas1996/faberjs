const basicTwoCrossTwoNodeWithFourChildren = {
  style: {
    display: 'grid',
    width: 400,
    height: 400,
    justifyItems: 'center',
    gridTemplateRows: '[one] 100 [two] 100 [three]',
    gridTemplateColumns: '[one] 100 [two] 100 [three]',
  },
  children: [
    {
      style: {
        width: 100,
        height: '100',
        gridRowStart: 'one',
        gridRowEnd: 'two',
        gridColumnStart: 'one',
        gridColumnEnd: 'two'
      }
    },
    {
      style: {
        width: 100,
        height: '100',
        gridRowStart: 'one',
        gridRowEnd: 'two',
        gridColumnStart: 'two',
        gridColumnEnd: '3'
      }
    },
    {
      style: {
        width: 100,
        height: '100',
        gridRowStart: '2',
        gridRowEnd: '3',
        gridColumnStart: '1',
        gridColumnEnd: '2'
      }
    },
    {
      style: {
        width: 100,
        height: '100',
        gridRowStart: 'two',
        gridRowEnd: 'three',
        gridColumnStart: 'two',
        gridColumnEnd: 'three'
      }
    }
  ]
};


export {
  basicTwoCrossTwoNodeWithFourChildren
};