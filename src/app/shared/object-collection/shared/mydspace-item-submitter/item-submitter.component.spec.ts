import { ChangeDetectionStrategy, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { of as observableOf } from 'rxjs';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { cold } from 'jasmine-marbles';
import { ItemSubmitterComponent } from './item-submitter.component';
import { WorkflowItem } from '../../../../core/submission/models/workflowitem.model';
import { PoolTask } from '../../../../core/tasks/models/pool-task-object.model';
import { EPersonMock } from '../../../testing/eperson.mock';
import { TranslateLoaderMock } from '../../../mocks/translate-loader.mock';
import { By } from '@angular/platform-browser';
import { createSuccessfulRemoteDataObject } from '../../../remote-data.utils';
import { Observable } from 'rxjs/internal/Observable';
import { SubmissionObject } from '../../../../core/submission/models/submission-object.model';

let component: ItemSubmitterComponent;
let fixture: ComponentFixture<ItemSubmitterComponent>;

const compIndex = 1;

let mockResultObject: Observable<RemoteData<SubmissionObject>>;

const rdSumbitter = createSuccessfulRemoteDataObject(EPersonMock);
const workflowitem = Object.assign(new WorkflowItem(), { submitter: observableOf(rdSumbitter) });
const rdWorkflowitem = createSuccessfulRemoteDataObject(workflowitem);
mockResultObject = observableOf(rdWorkflowitem);

describe('ItemSubmitterComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useClass: TranslateLoaderMock
          }
        })
      ],
      declarations: [ItemSubmitterComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).overrideComponent(ItemSubmitterComponent, {
      set: { changeDetection: ChangeDetectionStrategy.Default }
    }).compileComponents();
  }));

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(ItemSubmitterComponent);
    component = fixture.componentInstance;
  }));

  beforeEach(() => {
    component.object = mockResultObject;
    fixture.detectChanges();
  });

  it('should init submitter properly', () => {
    expect(component.submitter$).toBeObservable(cold('(b|)', {
      b: EPersonMock
    }));
  });

  it('should show a badge with submitter name', () => {
    const badge = fixture.debugElement.query(By.css('.badge'));

    expect(badge).toBeDefined();
    expect(badge.nativeElement.innerHTML).toBe(EPersonMock.name);
  });
});
