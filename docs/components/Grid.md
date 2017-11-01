<b>Examples:</b>

1.  Simple Example

```js
<div className="layout-example">
    <Grid columns={2} gap="2px">
        <Cell center middle>foo</Cell>
        <Cell center middle height={2}>bar</Cell>
        <Cell center middle width={2}>baz</Cell>
    </Grid>
</div>
```

2.  Traditional Grid

```js
const rows = counts =>
  lodash.flatMap(counts, number =>
    lodash.range(number).map(i =>
      <Cell center middle width={12 / number} key={`${number}_${i}`}>
        {i + 1}/{number}
      </Cell>
    )
  );
<div className="layout-example">
    <Grid columns={12} minRowHeight="45px">
      {rows([12, 6, 4, 2, 1])}
    </Grid>
</div>
```

