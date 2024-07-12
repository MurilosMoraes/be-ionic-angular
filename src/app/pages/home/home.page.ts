import { Component, inject, OnInit } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { TrainingCategory } from 'src/app/interfaces/ITrainingCategories';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  categories$: Observable<TrainingCategory[]> = new Observable();
  firestore: Firestore = inject(Firestore);
  loading: boolean = true;

  constructor() {}

  ngOnInit(): void {
    this.getCategories();

    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }

  getCategories = async () => {
    const itemCollection = await collection(this.firestore, 'categories');
    this.categories$ = await collectionData<any>(itemCollection);
  };
}
