import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { map, catchError, retry } from "rxjs/operators/";

import { environment } from '../../../../../environments/environment';
import { AnalysisModel } from '../../../shared/models/watchful-owl-api/analysis';

@Injectable({
  providedIn: "root",
})
export class WatchfulOwlService {
  constructor(private http: HttpClient) {}

  /**
   * servicio para análisis de artículo
   * @param params paramétro con la url a analizar
   */
  getAnalysis(params: object): Observable<AnalysisModel> {
    return this.http
      .post<AnalysisModel>(`${environment.watchful_owl}text-classification`, params)
      .pipe(
        retry(3),
        catchError((error) => {
          return this.handleError(error);
        }),
        map((response: any) => response.data)
      );
  }

  /**
   * Maneja errores en la llamada de servicios rest
   * @param error objeto de error en la repuesta
   */
  private handleError(error: HttpErrorResponse) {
    console.log(error);
    return throwError("Error al hacer la petición");
  }
}
