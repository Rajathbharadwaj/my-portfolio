declare module 'react-github-calendar' {
  export interface Activity {
    date: string;
    count: number;
    level: number;
  }

  export type BlockElement = JSX.Element;

  export interface ThemeInput {
    level0: string;
    level1: string;
    level2: string;
    level3: string;
    level4: string;
  }

  export interface Labels {
    totalCount?: string;
    firstDay?: string;
    lastDay?: string;
  }

  export interface GitHubCalendarProps {
    username: string;
    blockSize?: number;
    blockMargin?: number;
    color?: string;
    dateFormat?: string;
    fontSize?: number;
    fullYear?: boolean;
    theme?: ThemeInput;
    colorScheme?: 'light' | 'dark';
    hideMonthLabels?: boolean;
    hideColorLegend?: boolean;
    showWeekdayLabels?: boolean;
    labels?: Labels;
    weekStart?: 0 | 1;
    transformData?: (data: Activity[]) => Activity[];
    loading?: React.ReactNode;
    renderBlock?: (block: BlockElement, activity: Activity) => JSX.Element;
    onLoadStats?: (stats: { total: number }) => void;
    renderTooltip?: (activity: Activity) => JSX.Element;
    tooltipDataAttrs?: Object | ((activity: Activity) => Object);
  }

  const GitHubCalendar: React.FC<GitHubCalendarProps>;
  
  export default GitHubCalendar;
} 