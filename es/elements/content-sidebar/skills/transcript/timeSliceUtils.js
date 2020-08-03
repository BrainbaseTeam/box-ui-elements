/**
 * 
 * @file Transcript utils
 * @author Box
 */

/**
 * Returns true if there is a valid start time
 *
 * @param {SkillCardEntryTimeSlice} timeslices - skill entry time slice
 * @return {boolean} if there is a valid start time
 */
var isValidStartTime = function isValidStartTime(timeslice) {
  return !!timeslice && typeof timeslice.start === 'number';
};
/**
 * Returns true if there is a valid time slice with valid start time
 *
 * @param {SkillCardEntryTimeSlice[]} timeslices - skill entry time slice
 * @return {boolean} if it is a valid time slice
 */


var isValidTimeSlice = function isValidTimeSlice(timeslices) {
  return Array.isArray(timeslices) && isValidStartTime(timeslices[0]);
};

export { isValidTimeSlice, isValidStartTime };
//# sourceMappingURL=timeSliceUtils.js.map