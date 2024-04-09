import { CalendarActiveDay, CalendarBlock, CalendarCellDay, CalendarContent, CalendarCurrent, CalendarDayName, CalendarDaysNames, CalendarMonth, CalendarNav, CalendarNavAction, CalendarNavActions, CalendarOtherMonth, CalendarPSpan, CalendarPeriod, CalendarSells } from "./CalendarStyle";

function Calendar() {
  return (
    <CalendarBlock>
      <CalendarNav>
        <CalendarMonth>Сентябрь 2023</CalendarMonth>
        <CalendarNavActions>
          <CalendarNavAction data-action="prev">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="11"
              viewBox="0 0 6 11"
            >
              <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
            </svg>
          </CalendarNavAction>
          <CalendarNavAction data-action="next">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="11"
              viewBox="0 0 6 11"
            >
              <path d="M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z" />
            </svg>
          </CalendarNavAction>
        </CalendarNavActions>
      </CalendarNav>
      <CalendarContent>
        <CalendarDaysNames>
          <CalendarDayName>пн</CalendarDayName>
          <CalendarDayName>вт</CalendarDayName>
          <CalendarDayName>ср</CalendarDayName>
          <CalendarDayName>чт</CalendarDayName>
          <CalendarDayName>пт</CalendarDayName>
          <CalendarDayName>сб</CalendarDayName>
          <CalendarDayName>вс</CalendarDayName>
        </CalendarDaysNames>
        <CalendarSells>
          <CalendarOtherMonth>28</CalendarOtherMonth>
          <CalendarOtherMonth>29</CalendarOtherMonth>
          <CalendarOtherMonth>30</CalendarOtherMonth>
          <CalendarCellDay>31</CalendarCellDay>
          <CalendarCellDay>1</CalendarCellDay>
          <CalendarCellDay>2</CalendarCellDay>
          <CalendarCellDay>3</CalendarCellDay>
          <CalendarCellDay>4</CalendarCellDay>
          <CalendarCellDay>5</CalendarCellDay>
          <CalendarCellDay>6</CalendarCellDay>
          <CalendarCellDay>7</CalendarCellDay>
          <CalendarCurrent>8</CalendarCurrent>
          <CalendarActiveDay>9</CalendarActiveDay>
          <CalendarCellDay>10</CalendarCellDay>
          <CalendarCellDay>11</CalendarCellDay>
          <CalendarCellDay>12</CalendarCellDay>
          <CalendarCellDay>13</CalendarCellDay>
          <CalendarCellDay>14</CalendarCellDay>
          <CalendarCellDay>15</CalendarCellDay>
          <CalendarCellDay>16</CalendarCellDay>
          <CalendarCellDay>17</CalendarCellDay>
          <CalendarCellDay>18</CalendarCellDay>
          <CalendarCellDay>19</CalendarCellDay>
          <CalendarCellDay>20</CalendarCellDay>
          <CalendarCellDay>21</CalendarCellDay>
          <CalendarCellDay>22</CalendarCellDay>
          <CalendarCellDay>23</CalendarCellDay>
          <CalendarCellDay>24</CalendarCellDay>
          <CalendarCellDay>25</CalendarCellDay>
          <CalendarCellDay>26</CalendarCellDay>
          <CalendarCellDay>27</CalendarCellDay>
          <CalendarCellDay>28</CalendarCellDay>
          <CalendarCellDay>29</CalendarCellDay>
          <CalendarCellDay>30</CalendarCellDay>
          <CalendarOtherMonth>1</CalendarOtherMonth>
        </CalendarSells>
      </CalendarContent>

      <input type="hidden" id="datepick_value" value="08.09.2023" />
      <CalendarPeriod>
        <CalendarPSpan>
          Срок исполнения: <span>09.09.23</span>
        </CalendarPSpan>
      </CalendarPeriod>
    </CalendarBlock>
  );
}

export default Calendar;
