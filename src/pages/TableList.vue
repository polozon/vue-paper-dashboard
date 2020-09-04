<template>
    <div class="row">
      <div class="col-12">
        <card :title="table1.title" :subTitle="table1.subTitle">
          <div slot="raw-content" class="table-responsive">
            <paper-table type="hover" :data="table1.data" :columns="table1.columns">

            </paper-table>
          </div>
        </card>
      </div>
    </div>
</template>
<script>
import { PaperTable } from "@/components";
const tableColumns = ["Id", "Time", "Type", "Position", "Cause"];
const tableData = [
  {
    id: 1,
    time: "2020-02-01 13:35",
    type: "PaperJam",
    position: "Q125",
    cause: "Late to sensor"
  },
  {
    id: 2,
    time: "2020-03-12 10:42",
    type: "StrawberryJam",
    position: "Q153",
    cause: "Late to sensor"
  },
  {
    id: 3,
    time: "2020-05-02 12:63",
    type: "PaperStuck",
    position: "Q232, Q101",
    cause: "Jam over sensor"
  },
  {
    id: 4,
    time: "2020-06-10 15:15",
    type: "PaperJam",
    position: "Q106",
    cause: "Late to sensor"
  },
  {
    id: 5,
    time: "2020-06-11 09:30",
    type: "Jamz",
    position: "Q171",
    cause: "Jam over sensor"
  }
];

export default {
  components: {
    PaperTable
  },
  data() {
    return {
      table1: {
        title: "Error Table",
        subTitle: "Reported errors in system:",
        columns: [...tableColumns],
        data: [...tableData]
      },
      table2: {
        title: "Table on Plain Background",
        subTitle: "Here is a subtitle for this table",
        columns: [...tableColumns],
        data: [...tableData]
      }
    };
  }
};
</script>
<style>
</style>
