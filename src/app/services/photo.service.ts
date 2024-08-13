import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) { }

  getImages(): Observable<string[]> {
    const imagePaths = [
      'assets/photos/photo1.jpeg',
      'assets/photos/photo2.jpeg',
      'assets/photos/photo3.jpeg',
      'assets/photos/photo4.jpeg',
      'assets/photos/photo5.jpeg'
    ];

    const requests: Observable<ArrayBuffer>[] = imagePaths.map(path =>
      this.http.get(path, { responseType: 'arraybuffer' })
    );

    return forkJoin(requests).pipe(
      map((buffers: ArrayBuffer[]) => {
        return buffers.map(buffer => {
          let blob = new Blob([buffer], { type: 'image/jpeg' });
          return URL.createObjectURL(blob);
        });
      })
    );
  }
}
