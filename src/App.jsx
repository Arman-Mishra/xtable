import { useState } from "react";
import "./App.css";

const data = [
  { date: "2022-09-01", views: 100, article: "Article 1" },

  { date: "2023-09-01", views: 100, article: "Article 1" },

  { date: "2023-09-02", views: 150, article: "Article 2" },

  { date: "2023-09-02", views: 120, article: "Article 3" },

  { date: "2020-09-03", views: 200, article: "Article 4" },
];

function App() {
  const [table_data, setTableData] = useState(data);

  const compareView = (item1, item2) => {
    let d1 = new Date(item1.date).getTime();
    let d2 = new Date(item2.date).getTime();

    if (item1.views > item2.views) return -1;
    else if (item1.views < item2.view) return 1;
    else {
      return d2 - d1;
    }
  };

  const compareDate = (item1, item2) => {
    let d1 = new Date(item1.date).getTime();
    let d2 = new Date(item2.date).getTime();

    if (d1 > d2) return -1;
    else if (d1 < d2) return 1;
    else {
      return item2.views - item1.views;
    }
  };

  const handleSort = (e) => {
    if (e.target.innerText === "Sort by Date") {
      let data_new = [...data];
      data_new.sort(compareDate);
      setTableData(data_new);
      return;
    }

    if (e.target.innerText === "Sort by Views") {
      let data_new = [...data];
      data_new.sort(compareView);
      setTableData(data_new);
      return;
    }
  };

  return (
    <div>
      <h1>Date and Views Table</h1>
      <button onClick={handleSort}>Sort by Date</button>
      <button className="button" onClick={handleSort}>
        Sort by Views
      </button>

      <table>
        <thead>
          <tr>
            <th className="content">Date</th>
            <th className="content">Views</th>
            <th className="content">Article</th>
          </tr>
        </thead>
        <tbody>
          {table_data.map((item, idx) => {
            return (
              <tr key={idx}>
                <td>{item.date}</td>
                <td>{item.views}</td>
                <td>{item.article}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
