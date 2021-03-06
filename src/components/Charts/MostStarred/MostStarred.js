import React, { useContext } from "react";

import { Context } from "../../../context/Context";

import { CHART_COLOUR_PALETTE } from "../../../constants/constants";
import { getSelectionFromArray } from "../../../utilities/utilities";

import { Bar } from "react-chartjs-2";

const sortRepositories = (repositories) => {
  const sortedRepositories = repositories.sort(
    (a, b) => b.stargazers_count - a.stargazers_count
  );

  return sortedRepositories;
};

const formatRepositories = (repositories) => {
  const formattedRepositories = repositories.map((repository) => {
    const { name, stargazers_count: stars } = repository;

    return { name, stars };
  });

  return formattedRepositories;
};

const getLabels = (formattedRepositories) => {
  const labels = formattedRepositories.map(({ name }) => name);

  return labels;
};

const getDataset = (formattedRepositories) => {
  const dataset = formattedRepositories.map(({ stars }) => stars);

  return dataset;
};

const MostStarred = () => {
  const { repositories } = useContext(Context);

  const sortedRepositories = sortRepositories(repositories);

  const mostStarredRepositories = getSelectionFromArray(sortedRepositories, 5);

  const formattedRepositories = formatRepositories(mostStarredRepositories);

  //const labels = getLabels(formattedRepositories);

  const labels = ["February", "Janurary", "March", "April", "Jun"];
  const dataset = getDataset(formattedRepositories);

  const data = {
    labels,
    datasets: [
      {
        label: "Stars",
        backgroundColor: CHART_COLOUR_PALETTE,
        data: dataset,
      },
    ],
  };

  if (!repositories.length) {
    return (
      <article className="card card--center">
        <h4 className="card__title">No repositories</h4>
      </article>
    );
  }

  return (
    <article className="chart">
      <Bar
        data={data}
        options={{
          title: {
            display: true,
            text: "Expanese",
            fontSize: 20,
          },
          legend: {
            display: false,
          },
          responsive: true,
          maintainAspectRatio: true,
          scales: {
            yAxes: [
              {
                scaleLabel: {
                  display: true,
                  labelString: "Amount",
                },
              },
            ],
            xAxes: [
              {
                scaleLabel: {
                  display: true,
                  labelString: "Months",
                },
              },
            ],
          },
        }}
      />
    </article>
  );
};

export default MostStarred;
