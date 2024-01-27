import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';



@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css',
  animations: [
    trigger('detailExpand', [
      state('collapsed, void', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class CategoriasComponent {
  expandedElement: CategoriaDespesas | null = null;

  dataSource: CategoriaDespesas[] = [
    
    {
      despesas: 'Alimentação',
      subcategorias: ['Padaria', 'Restaurantes'],
    },
    {
      despesas: 'Moradia',
      subcategorias: ['Aluguel', 'Condomínio'],
    },
  ];


  dataSource2: CategoriaReceitas[] = [
    
    {
      receitas: 'Alimentação',
      subcategorias: ['Padaria', 'Restaurantes'],
    },
    {
      receitas: 'Moradia',
      subcategorias: ['Aluguel', 'Condomínio'],
    },
  ];

  columnsToDisplay: string[] = ['despesas'];
  columnsToDisplayWithExpand: string[] = [...this.columnsToDisplay, 'expand'];

  columnsToDisplayReceitas: string [] = ['receitas'];
  columnsToDisplayWithExpandReceitas: string[] = [...this.columnsToDisplayReceitas, 'expand'];


  trackByFn(index: number, item: any): any {
    return index;
  }
}


export interface CategoriaDespesas {
  despesas: string;
  subcategorias: string[];
}

export interface CategoriaReceitas {
  receitas: string;
  subcategorias: string[];
}
