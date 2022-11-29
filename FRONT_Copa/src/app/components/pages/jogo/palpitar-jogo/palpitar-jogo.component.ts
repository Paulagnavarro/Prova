import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Jogo } from "src/app/models/jogo.model";

@Component({
  selector: "app-palpitar-jogo",
  templateUrl: "./palpitar-jogo.component.html",
  styleUrls: ["./palpitar-jogo.component.css"],
})
export class PalpitarJogoComponent implements OnInit {
  jogo!: Jogo;
  displayedColumns = ['#', 'selecaoA', 'palpite1', 'x', 'palpite2', 'selecaoB', 'action']

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}
}

// updateJogo(): void {
//   this.jogoService.update(this.jogo).subscribe(() => {
//     this.jogoService.showMessage('Palpite inserido')
//     this.router.navigate(['/jogos']);
//   })
// }
