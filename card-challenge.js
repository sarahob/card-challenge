const deal = range => {
  const cards = [];
  while (range > 0) {
    const rand = Math.round(Math.random());
    cards.push(rand);
    range--;
  }
  return cards;
};

const play = range => {
  const deck = deal(range);
  const faceUp = deck.filter(d => d === 1);
  if (faceUp.length % 2 === 0) {
    return 'No answer, unwinnable';
  } else {
    const update = (deck, index) => {
      if (deck.every(d => d === '.')) {
        return deck;
      } else {
        if (deck[index] === 1) {
          deck[index] = '.';
          if (index !== 0) {
            const prev = index - 1;
            if (deck[prev] !== '.') {
              deck[prev] = deck[prev] === 1 ? 0 : 1;
            }
          }
          if (index + 1 !== deck.length) {
            const next = index + 1;
            if (deck[next] !== '.') {
              deck[next] = deck[next] === 1 ? 0 : 1;
            }
          }
        }
        const newIndex = index + 1 < deck.length ? index + 1 : 0;
        return update(deck, newIndex);
      }
    };

    return `Can be solved ${update(deck, 0)}`;
  }
};
