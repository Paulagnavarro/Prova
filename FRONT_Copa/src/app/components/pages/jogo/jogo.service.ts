import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { catchError, EMPTY, map, Observable } from "rxjs";
import { Jogo } from "src/app/models/jogo.model";

@Injectable({
    providedIn: 'root'
  })
  export class AlunoService {
  
    baseUrl = "https://localhost:5001/api/jogo"
  
    constructor(private snackBar: MatSnackBar,
      private http: HttpClient) { }
  
    showMessage(msg: string, isError: boolean = false): void {
      this.snackBar.open(msg, 'X', {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top",
        panelClass: isError ? ['msg-error'] : ['msg-sucess']
      })
    }
  
    cadastar(jogo: Jogo): Observable<Jogo> {
      const url = `${this.baseUrl}/cadastrar`
      return this.http.post<Jogo>(url, jogo).pipe(
        map(obj => obj),
        catchError(e => this.ErrorHandler(e))
      );
    }
  
    listar(): Observable<Jogo[]> {
      const url = `${this.baseUrl}/listar`
      return this.http.get<Jogo[]>(url).pipe(
        map(obj => obj),
        catchError(e => this.ErrorHandler(e))
      );
    }
  
    listarById(id: string): Observable<Jogo> {
      const url = `${this.baseUrl}/buscarid/${id}`
      return this.http.get<Jogo>(url).pipe(
        map(obj => obj),
        catchError(e => this.ErrorHandler(e))
      );
    }
  
    update(jogo: Jogo): Observable<Jogo> {
      const url = `${this.baseUrl}/alterar`
      return this.http.patch<Jogo>(url, jogo).pipe(
        map(obj => obj),
        catchError(e => this.ErrorHandler(e))
      );
    }
  
    ErrorHandler(error : HttpErrorResponse) : Observable<any> {
      this.showMessage(`Ocorreu um erro! ${error.message}`, true)
      return EMPTY
    }
  }