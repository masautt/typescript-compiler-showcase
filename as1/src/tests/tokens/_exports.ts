import { identifierSuite } from './identifiers';
import { operatorSuite } from './operators';
import { isKeywordSuite, hasKeywordSuite } from './keywords';
import { separatorSuite } from './separators';
import { TestSuite } from '../../@types/tests';
import { realSuite } from './real';

export const tokenTestSuites: TestSuite[] = [
    identifierSuite,
    operatorSuite,
    isKeywordSuite,
    hasKeywordSuite,
    separatorSuite,
    realSuite
];
