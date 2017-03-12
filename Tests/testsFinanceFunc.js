QUnit.test('annMonthSum()', function () {
  QUnit.assert.ok(annMonthSum(100000, 0.1, 6) === 17156.14, '6 month');
  QUnit.assert.deepEqual(annMonthSum(100000, 0.1, 2) , 50625.86, '2 month');
});

QUnit.test('annMonthDebt()', function () {
  QUnit.assert.ok(annMonthDebt(100, 50) === 50, 'a-b');
});

QUnit.test('annMonthRate()', function () {
  QUnit.assert.ok(annMonthRate(100000, 0.1) === 833.33, 'a*b');
});

QUnit.test('annData()', function () {
  QUnit.assert.deepEqual(annData(100000, 0.1, 1), {
    0: {
      time: 'Февраль 2017',
      balanceSum: 100000,
      monthRate: 833.33,
      monthDebt: 100000,
      monthSum: 100833.33
    }
  }, '1 month');
  QUnit.assert.deepEqual(annData(100000, 0.1, 2), {
    0: {
      time: 'Февраль 2017',
      balanceSum: 100000,
      monthRate: 833.33,
      monthDebt: 49792.53,
      monthSum: 50625.86
    },
    1: {
      time: 'Март 2017',
      balanceSum: 50207.47,
      monthRate: 418.4,
      monthDebt: 50207.46,
      monthSum: 50625.86
    }
  });
});

QUnit.test('diffData()', function () {
  QUnit.assert.deepEqual(annData(100000, 0.1, 1), {
    0: {
      time: 'Февраль 2017',
      balanceSum: 100000,
      monthRate: 833.33,
      monthDebt: 100000,
      monthSum: 100833.33
    }
  }, '1 month');
  QUnit.assert.deepEqual(diffData(100000, 0.1, 2), [
    {
      time: 'Февраль 2017',
      balanceSum: 100000,
      monthRate: 833.33,
      monthDebt: 50000,
      monthSum: 50833.33
    },
    {
      time: 'Март 2017',
      balanceSum: 50000,
      monthRate: 416.67,
      monthDebt: 50000,
      monthSum: 50416.67
    }
  ]);
});