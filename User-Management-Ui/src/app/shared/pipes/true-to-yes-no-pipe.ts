import { Pipe, PipeTransform } from '@angular/core';
   @Pipe({
     name: 'ConvertToYesNo'
   })
   export class ConvertToYesNo implements PipeTransform {
                    transform(value: string, args: any[]): string {
                        if (value) 
                        { return 'Yes'; 
                    }
                        else
                        {
                            return 'No';
                        }
                        
                      }
   }