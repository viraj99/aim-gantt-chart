export interface GanttOptions {
  headerHeight: number;
  columnWidth: number;
  step: number;
  barHeight: number;
  barCornerRadius: number;
  padding: number;
  viewModes: string[];
  viewMode: string;
  dateFormat: string;
  popupTrigger: string;
  language: string;
  projectOverview: boolean;
  makeFilter: boolean;
  popupWrapper?: HTMLDivElement;
  customPopupHtml?: string;
}
