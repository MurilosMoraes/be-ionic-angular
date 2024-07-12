interface TrainingItem {
  id: number;
  title: string;
  imageUrl: string;
  hasStarted: boolean;
}

export interface TrainingCategory {
  id: number;
  canCreate: boolean;
  category: string;
  isNew: boolean;
  items: TrainingItem[];
}