import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {mockSubmissionCollectionId, mockSubmissionId} from '../../../shared/mocks/mock-submission';
import {SubmissionSectionCorrectionComponent} from './section-correction.component';
import {BrowserModule, By} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import {SectionFormOperationsService} from '../form/section-form-operations.service';
import {getMockFormOperationsService} from '../../../shared/mocks/mock-form-operations-service';
import {FormService} from '../../../shared/form/form.service';
import {getMockFormService} from '../../../shared/mocks/mock-form-service';
import {ChangeDetectorRef, DebugElement} from '@angular/core';
import {FormBuilderService} from '../../../shared/form/builder/form-builder.service';
import {SubmissionSectionLicenseComponent} from '../license/section-license.component';
import {SectionDataObject} from '../models/section-data.model';
import {SectionsType} from '../sections-type';
import {SectionsServiceStub} from '../../../shared/testing/sections-service-stub';
import {SectionsService} from '../sections.service';
import {OperationType} from '../../../core/submission/models/workspaceitem-section-correction.model';

const sectionObject: SectionDataObject = {
  config: 'https://dspace7.4science.it/or2018/api/config/submissionforms/license',
  mandatory: true,
  data: {
    metadata: [
      {
        metadata: 'dc.issued.date',
        newValues: ['2020-06-25'],
        oldValues: ['2020-06-15'],
        label: 'Date Of Issued'
      },
      {
        metadata: 'dc.subject',
        newValues: ['key3'],
        oldValues: ['key1','key2'],
        label: 'Subject Keywords'
      },
      {
        metadata: 'dc.title',
        newValues: ['new title'],
        oldValues: [],
        label: 'Title'
      },
      {
        metadata: 'dc.type',
        oldValues: ['Text'],
        newValues: ['Book'],
        label: 'Type'
      }
    ],
    bitstream:[
      {
        filename: 'filename.pdf',
        operationType: OperationType.MODIFY,
        metadata: [
          {
            metadata: 'dc.title',
            newValues: ['Current Title'],
            oldValues: ['Previus Title'],
            label: 'Title'
          },
          {
            metadata: 'dc.description',
            newValues: ['Current Description'],
            oldValues: ['Previus Description'],
            label: 'Description'
          }
        ],
        policies: [
          {
            newValue: 'openaccess',
            oldValue: 'administrator',
            label: 'Access condition type'
          }
        ]
      }
    ]
  },
  errors: [],
  header: 'submit.progressbar.describe.license',
  id: 'license',
  sectionType: SectionsType.License
};
const submissionId = mockSubmissionId;
const collectionId = mockSubmissionCollectionId;

describe('CorrectionComponent', () => {
  let component: SubmissionSectionCorrectionComponent;
  let fixture: ComponentFixture<SubmissionSectionCorrectionComponent>;
  const sectionsServiceStub: SectionsServiceStub = undefined;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule.forRoot()
      ],
      declarations: [SubmissionSectionCorrectionComponent],
      providers: [
        {provide: SectionFormOperationsService, useValue: getMockFormOperationsService()},
        {provide: FormService, useValue: getMockFormService()},
        {provide: SectionsService, useClass: SectionsServiceStub},
        {provide: 'collectionIdProvider', useValue: collectionId},
        {provide: 'sectionDataProvider', useValue: sectionObject},
        {provide: 'submissionIdProvider', useValue: submissionId},
        ChangeDetectorRef,
        FormBuilderService,
        SubmissionSectionLicenseComponent
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmissionSectionCorrectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create correction component', () => {
    expect(component).toBeTruthy();
  });

  it('should contains a new date of issued on the firts row', () => {
    const tableElement: DebugElement = fixture.debugElement.query(By.css('.correction-item-table'));
    const table = tableElement.nativeElement;
    expect(table.innerHTML).toBeDefined();
    const rows: DebugElement[] = tableElement.queryAll(By.css('.correction-row'));
    expect(rows.length).toEqual(4);
    // check on dc.issued.date
    const cells: DebugElement[] = rows[0].queryAll(By.css('td'));
    expect(cells.length).toEqual(3);
    expect(cells[0].nativeElement.innerHTML).toContain('Date Of Issued');
    expect(cells[1].nativeElement.innerHTML).toContain('2020-06-15');
    expect(cells[2].nativeElement.innerHTML).toContain('2020-06-25');

  });
  it('should contains the new keyword on the second row', () => {
    const tableElement: DebugElement = fixture.debugElement.query(By.css('.correction-item-table'));
    const table = tableElement.nativeElement;
    expect(table.innerHTML).toBeDefined();
    const rows: DebugElement[] = tableElement.queryAll(By.css('.correction-row'));
    expect(rows.length).toEqual(4);
    // check on dc.subject
    const cells = rows[1].queryAll(By.css('td'));
    expect(cells.length).toEqual(3);
    expect(cells[0].nativeElement.innerHTML).toContain('Subject Keywords');
    expect(cells[1].nativeElement.innerHTML).toContain('key1');
    expect(cells[1].nativeElement.innerHTML).toContain('key2');
    expect(cells[2].nativeElement.innerHTML).toContain('key3');
  });
  it('should contains the new title on the thirtd row', () => {
    const tableElement: DebugElement = fixture.debugElement.query(By.css('.correction-item-table'));
    const table = tableElement.nativeElement;
    expect(table.innerHTML).toBeDefined();
    const rows: DebugElement[] = tableElement.queryAll(By.css('.correction-row'));
    expect(rows.length).toEqual(4);
    // check on dc.subject
    // check on dc.title
    const cells = rows[2].queryAll(By.css('td'));
    expect(cells.length).toEqual(3);
    expect(cells[0].nativeElement.innerHTML).toContain('Title');
    expect(cells[1].nativeElement.innerHTML).toContain('-');
    expect(cells[2].nativeElement.innerHTML).toContain('new title');

  });
  it('should contains the new type on the fourth row', () => {
    const tableElement: DebugElement = fixture.debugElement.query(By.css('.correction-item-table'));
    const table = tableElement.nativeElement;
    expect(table.innerHTML).toBeDefined();
    const rows: DebugElement[] = tableElement.queryAll(By.css('.correction-row'));
    expect(rows.length).toEqual(4);
    // check on dc.title
    const cells = rows[3].queryAll(By.css('td'));
    expect(cells.length).toEqual(3);
    expect(cells[0].nativeElement.innerHTML).toContain('Type');
    expect(cells[1].nativeElement.innerHTML).toContain('Text');
    expect(cells[2].nativeElement.innerHTML).toContain('Book');

  });
  it('should contains the bitstream table', () => {
    const tableElement: DebugElement = fixture.debugElement.query(By.css('.correction-bitstream-table'));
    const table = tableElement.nativeElement;
    console.log(tableElement)
    expect(table.innerHTML).toBeDefined();
    const rows: DebugElement[] = tableElement.queryAll(By.css('.correction-row'));
    expect(rows.length).toEqual(1);
    // check bitstream metadata
    const cells = rows[0].queryAll(By.css('td'));
    expect(cells.length).toEqual(3);
    expect(cells[0].nativeElement.innerHTML).toContain('filename.pdf');
    expect(cells[1].nativeElement.innerHTML).toContain('Description: Previus Description');
    expect(cells[1].nativeElement.innerHTML).toContain('Title: Previus Title');
    expect(cells[1].nativeElement.innerHTML).toContain('Access condition type: administrator');
    expect(cells[2].nativeElement.innerHTML).toContain('Title: Current Title');
    expect(cells[2].nativeElement.innerHTML).toContain('Description: Current Description');
    expect(cells[2].nativeElement.innerHTML).toContain('Access condition type: openaccess');

  });
});
