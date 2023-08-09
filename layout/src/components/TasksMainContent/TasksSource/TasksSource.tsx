const codeString = `
 1      const { Browser, Page, Queue, Storage, State, Metrics, Log, Utils, Helpers } = app;
 2     
 3      const { md5, Joi } = Utils;
 4     
 5      const rowSchema = Joi.object({
 6          id: Joi.string().required(),
 7          url: Joi.string().uri(),
 8          title: Joi.string().required(),
 9          duration: Joi.string().empty('').default(''),
10          reviews: Joi.number().integer().required(),
11          rent_price: Joi.number().required()
12      });
13     
14      async function onRun(args, options) {
15          // We can call other task easily
16          const {
17              STORAGE_NAME,
18              PRICE_TO_FLOAT
19          } = await Page.runTask('settings');
20     
21          await Page.waitFor(this.$title);
22     
23          const url = await Page.url();
24     
25          // This is the regular way to access a field define in the Selection panel
26          const title = await this.$title.text();
27     
28          const reviews = parseInt((await this.$reviews.text())
29              .trim()
30              .slice(1, -1)
31              .replace(',', ''));
32     
33          // You can as well use jQuery to access the page and get any data you need
34          const duration = await Page.evaluate(() => {
35              return $('span:contains("min"):nth(0)').text().trim();
36          });
37     
38          // using same jQuery and we can pass custom parameter
39          const rent_price = await Page.evaluate((to_float) => {
40              let price = $('div[style="left: 0px;"]:contains("Rent")').next('div').text().trim();
41     
42              if (to_float) {
43                  price = parseFloat(price.replace('$', ''));
44              }
45              return price  0;
46          }, PRICE_TO_FLOAT);
47     
48          const row = {
49              id: md5(url),
50              url,
51              title,
52              duration,
53              reviews,
54              rent_price
55          };
56     
57          // await Log.info(row)
58     
59          const { error, value } = rowSchema.validate(row);
60     
61          if (error) {
62              throw Error(\`Validation error: \${JSON.stringify(error.details)}\`);
63          }
64     
65          const storage = await Storage.get(STORAGE_NAME);
66     
67          try {
68              await storage.insert(row);
69              await Log.debug(\`[\${title}] inserted!\`);
70              await Metrics.inc('total_movies');
71          } catch (error) {
72              throw error;
73              // error will be automatically inserted into Logs tab
74          }
75      }
`;

export const TasksSource = () => {
  return (
    <section className='tasks__source'>
      <pre>
        <code>{codeString}</code>
      </pre>
    </section>
  );
};
