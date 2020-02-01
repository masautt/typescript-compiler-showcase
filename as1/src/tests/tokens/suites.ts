import { identifierSuite } from './data/identifiers';
import { operatorSuite } from './data/operators';
import { keywordSuite } from './data/keywords';
import { TestSuite } from '../../@types/tests';

export const tokenTestSuites: TestSuite[] = [identifierSuite, operatorSuite, keywordSuite];
