const dsv = require('d3-dsv');
const fs = require('fs');

const updateData = (input, output) => {
  try {
    //read the data
    const rawData = fs.readFileSync(input, 'utf8');
    const rawJson = dsv.csvParse(rawData);

    //create new structure
    let newData = [
      { year: 2018, states: [], diff: 0.001445, total: 215000 },
      { year: 2019, states: [], diff: 0.003119, total: 464000 },
      { year: 2020, states: [], diff: 0.004746, total: 706000 },
      { year: 2021, states: [], diff: 0.006165, total: 917000 },
      { year: 2022, states: [], diff: 0.007193, total: 1070000 },
      { year: 2023, states: [], diff: 0.008222, total: 1223000 },
      { year: 2024, states: [], diff: 0.009082, total: 1351000 },
      { year: 2025, states: [], diff: 0.009701, total: 1443000 },
      { year: 2026, states: [], diff: 0.009062, total: 1348000 },
      { year: 2027, states: [], diff: 0.008175, total: 1216000 },
    ];

    rawJson.forEach(r => {
      newData.forEach(y => {
        y.states.push({ name: r.name, fips: r.fips, jobs: r[y.year] });
      });
    });
    //write file
    fs.writeFileSync(output, JSON.stringify(newData, null, 0));
    console.log('Update complete.');
  } catch (err) {
    console.log(`There was a problem updating data: ${err}`);
  }
};

const beginTheWatch = (input, output) => {
  console.log('Inital new data building.');
  updateData(input, output);
  if (process.argv.includes('--watch')) {
    console.log('Watching for new changes...');
    fs.watch(
      input,
      {
        encoding: 'utf8',
      },
      (event, file) => {
        console.log('Updating data...');
        updateData(input, output);
      }
    );
  }
};

const input = './src/data/jobs.csv';
const output = './src/data/jobs.json';

if (fs.existsSync(output)) {
  console.log('Removing old data.');
  fs.unlink(output, err => {
    if (err) throw err;
    console.log('Old data deleted.');
    beginTheWatch(input, output);
  });
} else {
  beginTheWatch(input, output);
}
