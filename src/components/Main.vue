<template>
  <div class="wrapper">
    <div class="banner">
      <span class="slogan">输电线路传感监测系统</span>
    </div>
    <div class="content">
      <div class="xu-row">
        <div class="xu-col-7">
          <div class="chart-wrapper" style="margin-bottom:15px">
            <x-chart :option="initTempOption(sample)"></x-chart>
          </div>
          <!-- <div class="chart-wrapper" style="margin-bottom:15px">
            <x-chart :option="initOption(sample['angle'])"></x-chart>
          </div> -->
          <div class="chart-wrapper">
            <x-chart :option="initFOption(sample)"></x-chart>
          </div>
        </div>
        <div class="xu-col-5">
          <div class="table-wrapper xu-add-scrollBar">
            <x-table 
            :title="['ID','温度/℃','角度','弧垂/cm','振幅/mm','频率/Hz']"
            :size="'sm'">
              <tr v-for="(val,index) in tableSample" :key='index'>
                <td>{{ index + 1 }}</td>
                <td>{{ val['temp'] }}</td>
                <td>{{ val['angle'] }}</td>
                <td>{{ val['arc'] }}</td>
                <td>{{ val['amp'] }}</td>
                <td>{{ val['freq'] }}</td>
              </tr>
            </x-table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import xChart from "@/x-views/xChart";
import xTable from "@/x-views/xTable"
export default {
  components: {xChart, xTable},
  data() {
    return {
      sample:{
        temp:[25,25,25,24.9,24.9,24.9,24.9,24.8,24.9,24.8,24.8,24.8,24.8,24.8,24.8,24.8,24.7,24.7,
              24.7,24.6,24.6,24.6,24.6,24.6,24.6,24.6,24.6,24.6,24.6,24.6,24.6,24.6,24.6,24.6,24.6,
              24.6,24.6,24.6,24.6],
        angle:[0.43,0.61,0.36,0.65,0.4,0.54,0.42,0.23,0.43,0.39,0.49,0.41,0.45,0.41,0.31,0.3,0.23,0.6,
               0.29,0.46,0.43,0.4,0.57,0.35,0.16,0.45,0.42,0.4,0.41,0.43,0.38,0.55,0.43,0.57,0.26,0.8,
               0.09,0.59,0.16],
        arc:[11.466,17.473,9.41,19.005,10.57,14.986,11.164,5.854,11.466,10.276,13.335,10.866,12.076,10.866,
           8.008,7.733,5.854,17.103,7.46,12.386,11.466,10.57,16.024,9.126,4.034,12.076,11.164,10.57,10.866,
           11.466,9.985,15.328,11.466,16.024,6.651,25.741,2.256,16.739,4.034],
        amp:[2.03,2.08,2.12,2.07,1.12,1.06,1.06,1.00,1.01,1.08,1.10,0.08,0.02,0.00,0.00,1.08,1.11,1.09,1.00, 
             1.00,0.05,0.04,0.05,0.03,0.06,0.02,0.01,0.00,3.11,3.05,2.04,2.10,2.09,2.01,1.08,0.98,0.87,1.02, 
             1.00],
        freq:[38.10,38.20,36.00,38.07,38.12,37.63,37.91,36.02,37.99,38.94,38.02,0.18,0.01,0.00,0.02,35.90,33.10, 
              35.87,34.05,37.06,0.01,0.02,0.11,0.01,0.03,0.06,0.07,0.03,0.00,39.30,37.34,40.92,36.80,37.99,42.02, 
              36.01,39.05,38.01,39.77]
      },
    }
  },
  methods:{
    initTempOption(sample){
      return {
        grid:{
          containLabel:false,
          top:'40px',
          bottom:'40px',
        },
        title:{
          text:'温度与弧垂波形图',
          left:'center'
        },
        legend:{
          legend:['弧垂','温度'],
          icon:'circle',
          bottom:'5px'
        },
        xAxis: {
          type: "category",
        },
        yAxis: [
          {
            type: "value",
            position:'left',
            name: "温度/℃",
            nameLocation:'center',
            nameGap:40,
            min:24,
            max:26,
            splitNumber:5,
            scale:true,
            splitLine:{
              show:false
            },
            axisLabel:{
              textStyle:{
                color:'#5470c6'
              }
            },
            axisLine:{
              show:false
            },
            nameTextStyle:{
              color:'#5470c6'
            }
          },
          {
            type: "value",
            position:'right',
            name: "弧垂/mm",
            nameLocation:'center',
            nameGap:40,
            min:0,
            max:30,
            splitNumber:5,
            splitline:{
              show:false
            },
            axisLabel:{
              textStyle:{
                color:'#ff5000'
              }
            },
            nameTextStyle:{
              color:'#ff5000'
            }
          }
        ],
        series: [
          {
            data: sample['temp'],
            type: "line",
            smooth: true,
            yAxisIndex: 0,
            name:'温度'
          },
          {
            data: sample['arc'],
            type: "line",
            smooth: true,
            yAxisIndex: 1,
            name:'弧垂',
            color:"#ff5000"
          }
        ],
      }
    },
    initFOption(sample){
      return {
        grid:{
          containLabel:false,
          top:'40px',
          bottom:'40px',
        },
        title:{
          text:'微分振动振幅与频率波形图',
          left:'center'
        },
        legend:{
          legend:['振幅','频率'],
          icon:'circle',
          bottom:'5px'
        },
        xAxis: {
          type: "category",
        },
        yAxis: [
          {
            type: "value",
            position:'left',
            name: "振幅/mm",
            nameLocation:'center',
            nameGap:40,
            min:0,
            max:5,
            splitline:{
              show:false
            },
            axisLabel:{
              textStyle:{
                color:'#5470c6'
              }
            },
            nameTextStyle:{
              color:'#5470c6'
            }
          },
          {
            type: "value",
            position:'right',
            name: "频率/Hz",
            nameLocation:'center',
            nameGap:40,
            min:0,
            max:50,
            splitline:{
              show:false
            },
            axisLabel:{
              textStyle:{
                color:'#ff5000'
              }
            },
            nameTextStyle:{
              color:'#ff5000'
            }
          }
        ],
        series: [
          {
            data: sample['amp'],
            type: "line",
            smooth: true,
            yAxisIndex: 0,
            name:'振幅'
          },
          {
            data: sample['freq'],
            type: "line",
            smooth: true,
            yAxisIndex: 1,
            name:'频率',
            color:"#ff5000"
          }
        ],
      }
    }
  },
  computed:{
    tableSample:function(){
      const ans = []
      const maxNum = this.sample['temp'].length
      let i = 0
      while(i<maxNum){
        ans.push({
          'temp':this.sample.temp[i],
          'angle':this.sample.angle[i],
          'arc':this.sample.arc[i],
          'amp':this.sample.amp[i],
          'freq':this.sample.freq[i]
        })
        i = i + 1
      }
      return ans
    }
  }
}
</script>

<style scoped>
.wrapper {
  margin: 0 auto;
  width: 1000px;
}
.banner {
  height: 50px;
  background-color: #009688;
  margin: 0 -15px 15px -15px;
}
.slogan {
  display: inline-block;
  line-height: 50px;
  font-size: 40px;
  color: #fff;
  padding-left: 15px;
}
.content {
  /* height: 600px; */
  background-color: #fff;
  margin: 0 -15px 15px -15px;
  padding: 15px 0;
}
.chart-wrapper {
  height: 300px;
  padding: 0 15px;
}
.table-wrapper {
  height: 620px;
  font-size: 14px;
  padding: 0 15px;
}
</style>