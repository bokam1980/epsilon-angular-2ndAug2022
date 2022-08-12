import { Directive } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";

@Directive({
    selector: '[appPassword]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: AppPassword,
        multi: true
    }]
})
export class AppPassword implements Validator {
    validate(control: AbstractControl<any, any>): ValidationErrors | null {
        if (control.value !== null) {
            let value = control.value
            //1. 
            if (value.length <= 6) {
                return {
                    minimum: {
                        actual: value.length,
                        expected: 6
                    }
                }
            }
            //2.
            if (value.length >= 12) {
                return {
                    maximum: {
                        actual: value.length,
                        expected: 12
                    }
                }
            }

            //3.
            let lowercaseStatus = false
            for (let index = 0; index < value.length; index++) {
                const ch = value[index];
                if (ch >= 'a' && ch <= 'z') {
                    lowercaseStatus = true;
                    break;
                }
            }

            if (!lowercaseStatus) {
                return {
                    lower: 'at least one lowercase letter should be present'
                }
            }

            let uppercaseStatus = false
            for (let index = 0; index < value.length; index++) {
                const ch = value[index];
                if (ch >= 'A' && ch <= 'Z') {
                    uppercaseStatus = true;
                    break;
                }
            }

            if (!uppercaseStatus) {
                return {
                    upper: 'at least one uppercase letter should be present'
                }
            }

            let digitStatus = false
            for (let index = 0; index < value.length; index++) {
                const ch = value[index];
                if (ch >= '0' && ch <= '9') {
                    digitStatus = true;
                    break;
                }
            }

            if (!digitStatus) {
                return {
                    digit: 'at least one digit should be present'
                }
            }
            return null
        } else
            return null
    }
}