    export enum TimeOfTheDay {
      MORNING = 'Morning',
      AFTERNOON = 'Afternoon',
      EVENING = 'Evening',
      NIGHT = 'Night'
    }
  
    export interface Ticker {
      currentTime: TimeOfTheDay,
      currentDay: number,
      callADay: any,
      todayEvents: DayEvents,
      activeEvents: Event[],
      stats: TickerStats
    }
  
    export interface TickerStats {
      totalEvents: number,
    }
  
    export interface DayEvents {
      [TimeOfTheDay.MORNING]: Event[],
      [TimeOfTheDay.AFTERNOON]: Event[],
      [TimeOfTheDay.EVENING]: Event[],
      [TimeOfTheDay.NIGHT]: Event[],
    }
  
    export interface Event {
      startDay: number,
      endDay: number,
      startTime: TimeOfTheDay,
      endTime: TimeOfTheDay,
      handler: any
    }
  
  