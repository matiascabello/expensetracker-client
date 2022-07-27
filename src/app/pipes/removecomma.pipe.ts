import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'removeComma'
})
export class RemoveComma implements PipeTransform {
    transform(value: any) {
        if (value !== undefined && value !== null) {
            return value.replace(/,/g, "");
          } else {
            return "";
          }
    }
}