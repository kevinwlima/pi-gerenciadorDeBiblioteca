'use client';
import React from 'react';
import ReactECharts from 'echarts-for-react';
import styles from './graficoTurma.module.css';

export default function GraficoTurma({ dados }) {
  const dadosMockados = {
    '6º ano': { Fevereiro: 38, Março: 20 },
    '7º ano': { Fevereiro: 28, Março: 12 },
    '8º ano': { Fevereiro: 15, Março: 40 },
    '9º ano': { Fevereiro: 31, Março: 28 },
    '1º ano': { Fevereiro: 9, Março: 10 },
    '2º ano': { Fevereiro: 3, Março: 18 },
    '3º ano': { Fevereiro: 25, Março: 37 },
  };

  const turmas = Object.keys(dadosMockados);
  const meses = ['Fevereiro', 'Março'];
  const cores = ['#67A9A8', '#325453']; // Verde e Azul, por exemplo

  const series = meses.map((mes, index) => ({
    name: mes,
    type: 'bar',
    stack: false,
    label: {
      show: true,
      position: 'right',
    },
    itemStyle: {
      color: cores[index],
    },
    data: turmas.map((turma) => dadosMockados[turma][mes] || 0),
  }));

  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    legend: {
      top: 0,
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: {
      type: 'value',
    },
    yAxis: {
      type: 'category',
      data: turmas,
    },
    series,
  };

  return (
    <div className={styles.container}>
      <h2>Empréstimos por Turma</h2>
      <ReactECharts option={option} style={{ height: 400 }} />
    </div>
  );
}