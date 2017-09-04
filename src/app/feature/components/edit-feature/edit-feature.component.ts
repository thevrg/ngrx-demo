import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {Feature} from '../../types/feature';
import {FormBuilder, FormGroup} from '@angular/forms';
import {DetailsFormMode} from '../../../../types/common';

@Component({
  selector: 'app-edit-feature',
  templateUrl: './edit-feature.component.html',
  styleUrls: ['./edit-feature.component.css']
})
export class EditFeatureComponent implements OnChanges {

  @Input()
  feature: Feature;

  @Input()
  mode: DetailsFormMode;

  @Input()
  saveEnabled: boolean;

  FormMode = DetailsFormMode;

  @Output()
  featureChanges = new EventEmitter<Feature>();

  @Output()
  save = new EventEmitter<Feature>();

  @Output()
  startEdit = new EventEmitter<string>();

  form: FormGroup;

  propagateChanges = true;

  get displayOnly() {
    return this.mode === DetailsFormMode.SHOW;
  }

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({id: 1, name: 'x', description: 'ff', enabled: false});
    this.form.valueChanges.subscribe(feature => {
      if (this.propagateChanges) {
        this.featureChanges.next(feature);
      }
    });
  }


  ngOnChanges(changes: SimpleChanges) {
    if (changes.feature) {
      const feature = changes.feature.currentValue || {id: '', name: '', description: '', enabled: false};
      this.setValueSilently(feature);
    }
  }


  private setValueSilently(feature: any | { id: string; name: string; description: string; enabled: boolean }) {
    this.propagateChanges = false;
    this.form.patchValue(feature);
    this.propagateChanges = true;
  }

  onStartEdit() {
    this.startEdit.emit('Start Edit Feature');
  }

  onSave() {
    this.save.emit(this.form.value);
  }


}
