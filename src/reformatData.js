const dsv = require('d3-dsv');
const fs = require('fs');

const updateData = (input, output) => {
  try {
    //read the data
    const rawData = fs.readFileSync(input, 'utf8');
    const rawJson = dsv.csvParse(rawData);

    //create new structure
    let newData = [
      { year: 2018, states: [] },
      { year: 2019, states: [] },
      { year: 2020, states: [] },
      { year: 2021, states: [] },
      { year: 2022, states: [] },
      { year: 2023, states: [] },
      { year: 2024, states: [] },
      { year: 2025, states: [] },
      { year: 2026, states: [] },
      { year: 2027, states: [] },
    ];

    rawJson.forEach(r => {
      console.log(r.fips);
      newData.forEach(y => {
        y.states.push({ fips: r.fips, jobs: r[y.year] });
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
