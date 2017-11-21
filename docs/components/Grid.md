<b>Examples:</b>

1.  Simple Example

```js
<div className="layout-example">
    <Grid columns={2} gap="10px">
        <Cell center middle height={2}>foo</Cell>
        <Cell center middle height={2}>bar</Cell>
        <Cell center middle height={4} width={2}>baz</Cell>
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

3. Layout

```js
<div className="layout-example">
  <Grid
    columns={"100px 1fr 100px"}
    rows={"45px 1fr 45px"}
    areas={[
      "header header  header",
      "navigation  content sidebar   ",
      "footer footer  footer"
    ]}>
    <Cell area="header" center middle>Header</Cell>
    <Cell area="content" center middle>
      <div class="middle-content">Content</div>
    </Cell>
    <Cell area="navigation" center middle>
      <div class="middle-content">Navigation</div>
    </Cell>
    <Cell area="sidebar" center middle>
      <div class="middle-content">Sidebar</div>
    </Cell>
    <Cell area="footer" center middle>Footer</Cell>
  </Grid>
</div>  
```

