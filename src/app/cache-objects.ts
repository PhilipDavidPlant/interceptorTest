export class CacheObject{
    head:CacheHead;
    body:any;
}

export class CacheHead{
    userId: string;
    dateTimeCreated: Date = new Date();
    callTotal: number = 0;
    requestTimesMilliseconds: number[] = [];
    tripTimes: TripTimes;
}

export class TripTimes{
    timesMilliseconds: number[] = [];
    averageMilliseconds: number;
    outlierTimes: number[] = [];
}