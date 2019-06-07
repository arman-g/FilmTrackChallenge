import { Component, Inject } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-lightBulbs",
  templateUrl: "./lightBulbs.component.html"
})
export class LightBulbsComponent {
  lightBulbs: ILightBulb[];
  onLightBulbs: ILightBulb[];
  onLightBulbsCount: number;
  displayMessage: string;
  lightBulbForm: FormGroup;
  fc: any;

  constructor(
    private readonly http: HttpClient,
    @Inject("BASE_URL") private readonly baseUrl: string,
    formBuilder: FormBuilder) {

    this.lightBulbForm = formBuilder.group({
      peopleCount: ["", [Validators.required]],
      lightBulbCount: ["", [Validators.required]]
    });
    this.fc = this.lightBulbForm.controls;
  }

  onSubmit() {
    this.displayMessage = "";
    this.onLightBulbsCount = -1;
    const peopleCount = this.lightBulbForm.value["peopleCount"];
    const lightBulbCount = this.lightBulbForm.value["lightBulbCount"];
    const params = new HttpParams().set("pc", peopleCount).set("bc", lightBulbCount);
    this.http.get<ILightBulb[]>(this.baseUrl + "api/SampleData/LightBulbs", { params }).subscribe(result => {

      if (result != null) {
        this.lightBulbs = result;
        this.onLightBulbs = this.lightBulbs.filter(x => x.isOn);
        this.onLightBulbsCount = this.onLightBulbs.length;
      } else {
        this.onLightBulbsCount = 0;
      }
    },
      error => {
        this.displayMessage = "Ops! Something went wrong.";
        console.error(error);
      });
  }
}

interface ILightBulb {
  id: number;
  isOn: boolean;
}
