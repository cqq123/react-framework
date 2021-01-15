import React, { useEffect, useRef } from 'react';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/pie';
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/title';
import 'echarts/lib/component/tooltip';

const useEcharts = (chartRef, config, width, height) => {
  const chartInstance = useRef();

  const renderChart = React.useCallback(() => {
    const renderedInstance = echarts.getInstanceByDom(chartRef.current);
    if (renderedInstance) {
      chartInstance.current = renderedInstance;
    } else {
      chartInstance.current = echarts.init(chartRef.current);
    }
    chartInstance.current.setOption(config);
  }, [config, chartRef]);

  useEffect(() => () => chartInstance.current && chartInstance.current.dispose(), []);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.resize();
    }
  }, [width, height]);


  useEffect(() => {
    renderChart();
  }, [renderChart]);
};

export default useEcharts;
