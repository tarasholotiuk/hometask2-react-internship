export interface ITask {
  id: number | string;
  iconTask: string;
  name: string;
  created: string;
  category: string;
  content: string;
  dates: any | string | string[] | null;
  isArchived: boolean;
}
